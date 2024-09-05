import React from 'react';
import { Form, useLoaderData, redirect } from 'react-router-dom';
import { updateContact } from '../contact';


export const action = async ({ request, params }) => {
    // console.log("this is request in edit component", request);
    const formData = await request.formData();
    console.log("this is request in edit component", request);

    const updates = Object.fromEntries(formData);
    console.log("this updates edit component", updates);
    await updateContact(params.contactId, updates);
    return redirect(`/contacts/${params.contactId}`);

};




export default function EditContact() {
    const { contact } = useLoaderData();
    console.log("this is in edit component", contact);
    return (
        <Form method="post" id="contact-form">
            <p>
                <span>Name:</span>
                <input
                    type="text"
                    placeholder="Enter First Name"
                    name="first"
                    aria-label="first name"
                    defaultValue={contact?.first}

                />
                <input
                    type="text"
                    placeholder="Enter Last Name"
                    name="last"
                    aria-label="last name"
                    defaultValue={contact?.last}

                />

            </p>
            <label>
                <span>Twitter</span>
                <input
                    type="text"
                    name="twitter"
                    placeholder="@jack"
                    defaultValue={contact?.twitter}
                />
            </label>

            <label>
                <span>Avatar URL</span>
                <input
                    placeholder="https://example.com/avatar.jpg"
                    aria-label="Avatar URL"
                    type="text"
                    name="avatar"
                    defaultValue={contact?.avatar}

                />
            </label>
            <label>
                <span>Notes</span>
                <textarea
                    name="notes"
                    defaultValue={contact?.notes}
                    rows={10}
                />
            </label>
            <p>
                <button type="submit">Save</button>
                <button type="button">Cancel</button>
            </p>
        </Form>
    );
}
