type ButtonProps = {
  content: string,
  className: string
};

export default function Button({ content, className}: ButtonProps) {
  return <button className={className}>
    <p>{content}</p>
  </button>;
}
