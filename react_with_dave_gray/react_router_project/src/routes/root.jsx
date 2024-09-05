import React from 'react';
import { Outlet, Link, useLoaderData, Form, redirect } from 'react-router-dom';
import { getContacts, createContact } from '../contact';

export async function loader() {
    const contacts = await getContacts();

    return { contacts };
}

export const action = async () => {
    const contact = await createContact();

    // return { contact };
    return redirect(`/contacts/${contact.id}/edit`);
};







export default function Root() {

    const { contacts } = useLoaderData();
    return (
        <>
            <div id="sidebar">
                <h1>React Router Contacts</h1>
                <div>
                    <form id="search-form" role="search">
                        <input
                            id="q"
                            aria-label="Search contacts"
                            placeholder="Search"
                            type="search"
                            name="q"
                        />
                        <div
                            id="search-spinner"
                            aria-hidden
                            hidden={true}
                        />
                        <div
                            className="sr-only"
                            aria-live="polite"
                        ></div>
                    </form>
                    <Form method="post">
                        <button type="submit">New</button>
                    </Form>
                </div>
                <nav>
                    {
                        contacts.length ?
                            (
                                <ul>
                                    {
                                        contacts.map((eachContact) => (
                                            <Link to={`contacts/${eachContact.id}`} key={eachContact.id}>

                                                {eachContact.first || eachContact.last ?
                                                    <>{eachContact.first} {eachContact.last}</>

                                                    : (<i>No Name</i>)
                                                }{" "}
                                                {eachContact.favorite && <span>★</span>}
                                            </Link>

                                        ))
                                    }
                                </ul>
                            )
                            :
                            <p><i>No Contacts</i></p>
                    }
                </nav>
            </div>
            <div id="detail">

                <Outlet />
            </div>
        </>
    );
}
