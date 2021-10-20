

export const LightDarkTheme = (props) => {

  console.log(props.bg)
  return (
    <div style={{ background: props.bg, color: props.fc}}>
     {props.children}
    </div>
  )
}
