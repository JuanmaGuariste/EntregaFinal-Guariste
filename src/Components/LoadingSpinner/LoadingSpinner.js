import { ImSpinner9 } from "react-icons/im";
import './LoadingSpinner.scss'

export const LoadingSpinner = () => {
    return (
        <div className="loading-spinner">
            <ImSpinner9 className="spinner-icon" />
        </div>
    )
}