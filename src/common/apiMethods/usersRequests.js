const usersRequests = {
  getUsersListRequest: () => ({
        url: `https://jsonplaceholder.typicode.com/users`,
        method: 'get'
    }),
  getUserDetailsRequest: ({selectedUserId}) => ({
        url: `https://jsonplaceholder.typicode.com/users/${selectedUserId}`,
        method: 'get'
    })
}

export default usersRequests
