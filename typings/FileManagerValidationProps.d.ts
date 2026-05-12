/**
 * This file was generated from FileManagerValidation.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { ComponentType, ReactNode } from "react";
import { EditableValue } from "mendix";

export interface FileManagerValidationContainerProps {
    name: string;
    tabIndex?: number;
    id: string;
    content: ReactNode;
    targetAttribute: EditableValue<string | boolean>;
}

export interface FileManagerValidationPreviewProps {
    readOnly: boolean;
    renderMode: "design" | "xray" | "structure";
    translate: (text: string) => string;
    content: { widgetCount: number; renderer: ComponentType<{ children: ReactNode; caption?: string }> };
    targetAttribute: string;
}
