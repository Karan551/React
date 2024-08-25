import React from 'react';
import { Editor } from "@tinymce/tinymce-react";
import conf from '../conf/config';

function MyRTE() {
    return (
        <div className='w-1/2 mx-auto my-2'>
            <h2>This is our RTE.</h2>
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
                    statusbar:false,



                }}
            />
        </div>
    );
}

export default MyRTE;
