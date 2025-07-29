export default function Post({ content, likesNo, loveNo }) {
  return (
    <div className="w-full p-3 rounded shadow">
      <h1>{content}</h1>
      <div className="w-full">
        <p>Likes : {likesNo}</p>
        <p>Love : {loveNo}</p>
      </div>
    </div>
  );
}
