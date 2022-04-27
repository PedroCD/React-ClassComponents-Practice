import { Component } from "react";

interface IProps {
    name: string;
}

/* export class TitleClassComponent extends Component<IProps> {
    constructor(props: IProps) {
        super(props)
    }

    render() {
        return (
            <div>{this.props.name}</div>
        )
    }
} */

export  const TitleClassComponent = (name: IProps): JSX.Element => {
    return (
        <div>{name.name}</div>
    )
}