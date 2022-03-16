export function Counter(props) {
  let className = "counter";

  if (props.value) {
    className = "counter " + props.value;
  }

  return <button className={className} onClick={props.onClick}></button>;
}
