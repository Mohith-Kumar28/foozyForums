import * as React from "react";
import { Box, Spinner, Stack, Center } from "@chakra-ui/react";
import Comment from "./Comment";
import CommentEditor from "./CommentEditor";
import useComments from "../hooks/useComments";
import useEvents from "../hooks/useEvents";

interface CommentsProps {
  topic: string;
}

const Comments: React.FunctionComponent<CommentsProps> = ({ topic }) => {
  const query = useComments({ topic });

  useEvents({ topic });

  return (
    <Box mt={9}>
      {query.isLoading && (
        <Center p={8}>
          <Spinner />
        </Center>
      )}
      <Stack spacing={4}>
        {query.isFetched && <CommentEditor topic={topic} />}
        {query.data?.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </Stack>
    </Box>
  );
};

export default Comments;
