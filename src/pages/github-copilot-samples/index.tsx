import React from "react";
import { Box, Card, CardBody, CardHeader, Heading, Link, Stack, Text } from "@chakra-ui/react";
import samples from "@/assets/github-copilot/samples/index.json";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import SimpleMarkdown from "@/components/SimpleMarkdown";

type Snippet = {
  name: string;
  prompt: string;
  result: string;
};
type GitHubCopilotSample = {
  name: string;
  author: string;
  category: string;
  homepage: string;
  snippets: Snippet[];
  path: string;
};

function GitHubCopilotSamples() {
  function SnippetCode(index: number, sample: GitHubCopilotSample, snippet: Snippet) {
    return (
      <Card>
        <CardHeader>
          <Heading size='md'>
            {snippet.name} -{" "}
            <Link href={sample.homepage} isExternal>
              {sample.author} <ExternalLinkIcon />
            </Link>
          </Heading>
        </CardHeader>
        <CardBody>
          <Stack>
            <Heading size={"md"}>Prompt</Heading>
            <SimpleMarkdown content={snippet.prompt} />
            <Heading size={"md"}>Result</Heading>
            <SimpleMarkdown content={snippet.result} />
          </Stack>
        </CardBody>
      </Card>
    );
  }

  let githubCopilotLink =
    "https://github.com/prompt-engineering/click-prompt/tree/master/src/assets/github-copilot/samples";
  return (
    <div>
      <Text>
        分享我的 GitHub Copilot 心得：
        <Link href={githubCopilotLink} isExternal>
          Pull Request <ExternalLinkIcon />
        </Link>
      </Text>
      {samples.length > 0 && (
        <Box w='100%' maxW='1600px' mx='auto' sx={{ columnCount: [1, 2], columnGap: "8px" }}>
          {samples.map((sample) => sample.snippets.map((artist, index) => SnippetCode(index, sample, artist)))}
        </Box>
      )}
    </div>
  );
}

export default GitHubCopilotSamples;