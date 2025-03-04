import { useState, useEffect } from 'react';

import type {
  I18nMarkdownLoaderParams,
  MarkdownLoaderState,
} from '../../types/useI18nMarkdownLoader.ts';

const INITIAL_STATE: MarkdownLoaderState = {
  content: null,
  error: null,
  isLoading: true,
};

const fetchMarkdownContent = async (
  { section, fileName, language }: I18nMarkdownLoaderParams,
  signal: AbortSignal
): Promise<string> => {
  const response = await fetch(
    `/markdown/${language}/${section}/${fileName}.md`,
    {
      signal,
    }
  );
  if (!response.ok) {
    throw new Error(`Failed to load [${section}] ${fileName} (${language})`);
  }
  return response.text();
};

export const useI18nMarkdownLoader = ({
  section,
  fileName,
  language,
}: I18nMarkdownLoaderParams): MarkdownLoaderState => {
  const [state, setState] = useState<MarkdownLoaderState>(INITIAL_STATE);

  useEffect(() => {
    if (!fileName || !language) return;

    const controller = new AbortController();
    const { signal } = controller;

    const loadMarkdown = async () => {
      setState(INITIAL_STATE);

      try {
        const content = await fetchMarkdownContent(
          { section, fileName, language },
          signal
        );
        setState({ content, error: null, isLoading: false });
      } catch (error) {
        if (signal.aborted) return;
        setState({
          content: null,
          error:
            error instanceof Error
              ? error.message
              : 'An unknown error occurred.',
          isLoading: false,
        });
      }
    };

    void loadMarkdown();

    return () => {
      controller.abort();
    };
  }, [fileName, language]);

  return state;
};
