import { ReactNode, FC as ReactFC } from "react";
import { connect } from "react-redux";

const mapStateToProps = (state: any) => state;

export default function reduxConnect(WrappedComponent: ReactNode | ReactFC | any, actions: any, state = mapStateToProps) {
    return connect(state, actions, null, { forwardRef: true })(WrappedComponent);
};
