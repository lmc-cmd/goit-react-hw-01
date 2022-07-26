const FriendListItem = props => {
  return (
    <li
      className="item"
      style={{
        width: '130px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginLeft: '2px',
        border: '2px solid blue',
      }}
    >
      <span
        className="status"
        style={
          props.data.isOnline === true
            ? {
                width: '8px',
                height: '8px',
                marginBottom: '3px',
                borderRadius: '5px',
                backgroundColor: 'green',
              }
            : {
                width: '8px',
                height: '8px',
                marginBottom: '3px',
                borderRadius: '5px',
                backgroundColor: 'red',
              }
        }
      >
        {props.data.isOnline}
      </span>
      <img
        className="avatar"
        src={props.data.avatar}
        alt="User avatar"
        width="48"
      />
      <p
        className="name"
        style={{
          display: 'flex',
        }}
      >
        {props.data.name}
      </p>
    </li>
  );
};
export default FriendListItem;
