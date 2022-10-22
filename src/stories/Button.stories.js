import Button from '../components/Button'

export default{
    title: "Button",
    component: Button,
    argTypes: { handleClick: { action: "handleCLick"},
                backgroundColor: "blue"
    
        }
}

const Template = args => <Button {...args} />

export const Red = Template.bind({})
Red.args = {
    backgroundColor: "red",
    label: "tesx",
    size: "lg",
    fontSize: "45px",
    display: "visible"
}

export const SmallBlue = Template.bind({})
SmallBlue.args = {
    backgroundColor: "blue",
    label: "tesx",
    size: "sm",
    fontSize: "45px",
    display: "visible"
}