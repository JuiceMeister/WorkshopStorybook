import Stack from '../components/Stack'

export default{
    title: "Stack",
    component: Stack,
    argTypes: {
        type: "number",
        defaultValue: 4
    }
}

const Template = ({children, ...args}) => (<Stack {...args}>
{[...Array(children).keys()].map(n => (
    <div style={{
        width: "50px", height: "50px", backgroundColor: "red", display: "flex",
        justifyContent: "center", alignItems: "center"
    }}>{n + 1}</div>
))}

</Stack>)

export const Horizontal = Template.bind({})
Horizontal.args = {
    children: 4,
    direction: "row",
    spacing: 1,
    wrap: false

}
