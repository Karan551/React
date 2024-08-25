import React from 'react';
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";
import conf from '../conf/config';


function RTE({ name, control, label, defaultValue = "" }) {
    return (
        <div className='w-full'>
            <h2 className='text-3xl font-semibold text-orange-400 text-center my-2'>RTE </h2>

            {
                label && <label className='inline-block mb-1 pl-1'>{label}</label>
            }

            <Controller
                name={name || "content"}
                control={control}

                render={({ field: onChange }) => (
                    <Editor
                        apiKey={conf.tinyMCEAPIKey}
                        init={{
                            selector: "textarea",
                            placeholder: "Type Here...",
                            plugins: ['advlist', 'anchor', 'autolink', 'help', 'image', 'link', 'lists',
                                'searchreplace', 'table', 'wordcount', 'preview', 'media', 'pagebreak', 'fullscreen', 'emoticons', 'code', 'codesample', 'insertdatetime', 'charmap'],

                            toolbar: ' blocks | bold italic underline strikethrough |fontsizeinput|forecolor backcolor |fontfamily|alignleft aligncenter alignright alignjustify | bullist numlist outdent indent ',
                            height: 500,
                            width: 700,
                            menubar: true,
                            link_default_target: '_blank',
                            branding: false,
                            resize: 'both',
                            mobile: {
                                menubar: true
                            },

                            font_size_input_default_unit: "px",
                            statusbar: false,



                        }}
                    />


                )}
                // here we will write something
            />

        </div>
    );
}

export default RTE;
