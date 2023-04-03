import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Field } from "formik";
import { GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";

interface EditorProps {
    label?: string;
    name: string;
    type?: string;
    updateProp: (prop: string) => void;
}

const Editor = (props: EditorProps) => {
    const { name, updateProp } = props;

    return (
        <GrammarlyEditorPlugin clientId="client_8uvgmmYtA3FKgst7xf8ZfF">
            <Field name={name}>
                {({ field, form }) => {
                    const { value } = field;
                    const { setFieldValue } = form;

                    const handleChange = (value: string) => {
                        setFieldValue(name, value);
                        updateProp(value);
                    };

                    return (
                        <ReactQuill
                            value={value}
                            onChange={handleChange}
                            className="rich-editor"
                        />
                    );
                }}
            </Field>
        </GrammarlyEditorPlugin>
    );
};

export default Editor;
