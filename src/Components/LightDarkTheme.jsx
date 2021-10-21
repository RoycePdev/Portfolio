export const LightDarkTheme = (props) => {
  return (
    <div style={{ background: props.bg, color: props.fc }}>
      {props.children}
    </div>
  )
}
