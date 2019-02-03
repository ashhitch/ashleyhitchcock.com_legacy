import { StyledButton } from "./styles/Button";

export default ({ fetchMore, endCursor, query, children, hasNextPage }) =>
  hasNextPage && (
    <StyledButton
      type="button"
      onClick={() =>
        fetchMore({
          variables: {
            cursor: endCursor,
            perPage: 6
          },
          updateQuery: (previousResult, { fetchMoreResult }) => {
            const { edges: newEdges, pageInfo } = fetchMoreResult.posts;

            return newEdges.length
              ? {
                  // Put the new posts at the end of the list and update `pageInfo`
                  // so we have the new `endCursor` and `hasNextPage` values
                  [query]: {
                    __typename: previousResult.posts.pageInfo.__typename,
                    edges: [...previousResult.posts.edges, ...newEdges],
                    pageInfo
                  }
                }
              : previousResult;
          }
        })
      }
    >
      {children}
    </StyledButton>
  );
