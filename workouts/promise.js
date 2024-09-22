function fetchUserData() {
    return new Promise(resolve => setTimeout(() => resolve({ id: 1, name: 'John' }), 1000));
  }
  
  function fetchUserPosts() {
    return new Promise(resolve => setTimeout(() => resolve([{ id: 1, title: 'Post 1' }, { id: 2, title: 'Post 2' }]), 1500));
  }
  
  async function getUserInfo() {
    return Promise.all([fetchUserData(), fetchUserPosts()])
  }
  
  getUserInfo().then((res) => console.log(res));
  