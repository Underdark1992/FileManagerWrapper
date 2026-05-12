import { createElement, ReactElement } from "react";
import { FileManagerValidationContainerProps } from "../typings/FileManagerValidationProps";

export function FileManagerValidation({ 
    content, 
    targetAttribute 
}: FileManagerValidationContainerProps): ReactElement {
    
    const validationMessage = targetAttribute.validation;
    const hasError = !!validationMessage;

    // We only apply our internal classes. Mendix handles the outer layout grid entirely.
    const wrapperClasses = `file-manager-validation-wrapper ${hasError ? "has-error" : ""}`.trim();

    return (
        <div className={wrapperClasses}>
            <div className="file-manager-content">
                {content}
            </div>

            {hasError && (
                <div className="alert alert-danger mx-validation-message">
                    {validationMessage}
                </div>
            )}
        </div>
    );
}