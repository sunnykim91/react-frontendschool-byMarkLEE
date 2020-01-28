import React from 'react';

export default function withHasMounted(Component) {
  class WrappedComponent extends React.Component {
    state = { hasMounted: false };

    componentDidMount() {
      this.setState({
        hasMounted: true
      });
    }

    render() {
      const { hasMounted } = this.state;
      return <Component {...this.props} hasMounted={hasMounted} />;
    }
  }
  WrappedComponent.displayName = `withHasMounted(${Component.name})`;
  return WrappedComponent;
}
