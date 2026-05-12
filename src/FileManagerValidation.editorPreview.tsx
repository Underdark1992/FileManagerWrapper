import { createElement, ReactElement } from "react";
import { FileManagerValidationPreviewProps } from "../typings/FileManagerValidationProps";

export function preview({ content }: FileManagerValidationPreviewProps): ReactElement {
    
    const wrapperClasses = `file-manager-validation-wrapper has-error`;

    return (
        <div className={wrapperClasses}>
            
            <div className="file-manager-content">
                <content.renderer caption="Place Mendix File Manager here">
                    <div />
                </content.renderer>
            </div>

            <div className="alert alert-danger mx-validation-message">
                [Validation message preview]
            </div>
            
        </div>
    );
}

export function getPreviewCss(): string {
    return require("./ui/FileManagerValidation.css");
}