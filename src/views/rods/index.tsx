import * as React from 'react';
import BaseLayout from '../../layouts/base';

interface IRodsViewProps extends React.ComponentPropsWithoutRef<typeof BaseLayout> {
    title: string;
}

class RodsView extends React.Component<IRodsViewProps> {
    render() {
        return (
            <BaseLayout title={this.props.title}>
                <h2>Index</h2>
                <p>Hello from our RodsView component!</p>
            </BaseLayout>
        );
    }
}

export default RodsView;