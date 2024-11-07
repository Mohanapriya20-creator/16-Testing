import { useEffect, useState } from 'react';

const Async = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Loading state

  useEffect(() => {
    fetch('https://thingproxy.freeboard.io/fetch/https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setIsLoading(false); // Stop loading once data is fetched
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>; // Show loading message
  }

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Async;
