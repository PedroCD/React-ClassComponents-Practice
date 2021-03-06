import { Component } from "react";

interface IProps {
    content: string;
}

/* export class ContentClassComponent extends Component<IProps> {
    constructor(props: IProps) {
        super(props)
    }

    render() {
        return (
            <div>{this.props.content}</div>
        )
    }
} */

export const ContentClassComponent = (content: IProps): JSX.Element => {
    return (
        <div>{content.content}</div>
    )
}