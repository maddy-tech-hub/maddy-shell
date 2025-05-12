interface PropType {
    isLogin: boolean;
}

function HoC(WrappedComponent: React.ComponentType<PropType>) {
    return function EnhancedComponent(props: any) {
        return <WrappedComponent {...props} />;
    };
}

const WrappedComponent = (props: PropType) => {
    return <div>{props.isLogin ? 'Welcome to Wrapper Component' : 'Please Re Login'}</div>;
}

export default HoC(WrappedComponent);