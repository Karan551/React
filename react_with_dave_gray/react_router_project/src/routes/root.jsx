import { Link, useNavigation, Outlet, useLoaderData, Form, redirect, NavLink } from "react-router-dom";
import { getContacts, createContact } from "../contact.js";


// this function is used to read / get data 
export async function loader() {
    const contacts = await getContacts();
    console.log("loader is called and contact is loaded or read");
    return { contacts };
}
// this function is used to write/create data 
export async function action({ params }) {
    const contact = await createContact();
    console.log("action is called and contact is created");
    console.log("this is actions in root", contact, { contact });
    console.log("this is params", params);
    // return { contact };
    return redirect(`/contacts/:${contact.id}/edit`);
}



export default function Root() {
    const { contacts } = useLoaderData();
    // console.log("this is returned by loader function", contacts);
    // console.log(contacts.length);

    const navigation = useNavigation();
    return (
        <>
            <div id="sidebar">
                <h1>React Router Contacts</h1>
                <div>
                    <Form id="search-form" role="search">
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
                    </Form>
                    <Form method="post">
                        <button type="submit">New</button>
                    </Form>
                </div>
                <nav>
                    {
                        contacts.length ?
                            <ul>
                                {
                                    contacts.map((contact) => (
                                        <li key={contact.id}>
                                            <NavLink to={`contacts/${contact.id}`}
                                                className={({ isActive, isPending }) => isActive ? "active" : isPending ? "pending" : ""}


                                            >
                                                {contact.first || contact.last ?
                                                    <>{contact.first} {contact.last}</>
                                                    : <i>No Name</i>
                                                }
                                                {contact.favourite && <span>★</span>}
                                            </NavLink>
                                        </li>
                                    ))
                                }
                            </ul>
                            : <p> <i>No contacts</i> </p>
                    }
                </nav>
            </div>
            <div id="detail"
                className={
                    navigation.state === "loading" ? "loading" : ""
                }


            >

                <Outlet />
            </div>
        </>
    );
}