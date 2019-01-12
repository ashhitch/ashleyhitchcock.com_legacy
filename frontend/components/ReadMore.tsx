export default ({fetchMore, endCursor}) =>  <button type="button" onClick={() =>
  fetchMore({
    variables: {
      cursor: endCursor
    },
    updateQuery: (previousResult, { fetchMoreResult }) => {

      const { edges: newEdges, pageInfo } = fetchMoreResult.posts;

      return newEdges.length
        ? {
            // Put the new posts at the end of the list and update `pageInfo`
            // so we have the new `endCursor` and `hasNextPage` values
            posts: {
              __typename: previousResult.posts.pageInfo.__typename,
              edges: [...previousResult.posts.edges, ...newEdges],
              pageInfo
            }
          }
        : previousResult;
    }
  })
}>More</button>