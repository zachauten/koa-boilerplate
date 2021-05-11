import React from "react";

interface State {
  name: string;
}

interface Props {
  name?: string;
}

export class App extends React.Component<Props, State> {

  constructor (props: Props) {
    super(props);
    this.state = { name: this.props.name };
  }

  render() {
    return <div>Hello { this.state.name }!</div>
  }
}

export default { App };
