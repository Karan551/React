import React from 'react';
import { getContact } from '../contact';
import { Form, useLoaderData } from "react-router-dom";



export const loader = async ({ params }) => {
    const contact = await getContact(params.contactId);
    return { contact };

};

export default function Contact() {

    const {contact} = useLoaderData();
    // console.log("this is contact component", a);
    // const contact = {
    //     first: "Your",
    //     last: "Name",
    //     avatar: "https://robohash.org/you.png?size=200x200",
    //     twitter: "your_handle",
    //     notes: "Some notes",
    //     favorite: true,
    // };
    return (
        <div id="contact">
            <div >

                <img
                    src={contact.avatar || `https://robohash.org/${contact.id}.png?size=200x200`}
                    alt={contact.name}
                />
            </div>

            <div>

                <h1>
                    {contact.first || contact.last ?
                        <>{contact.first} {contact.last}</>

                        : (<i>No Name</i>)
                    }{" "}
                    <Favorite contact={contact} />
                </h1>

                {
                    contact.twitter &&
                    <p>
                        <a href='#'>{contact.twitter}</a>
                    </p>
                }

                {contact.notes && <p>{contact.notes}</p>}

                <div>

                    <Form action='edit'>
                        <button type="submit">Edit</button>
                    </Form>

                    <Form
                        action="destroy"
                        method="post"
                        onSubmit={(event) => {
                            if (!confirm("Please confirm this.")) {
                                event.preventDefault();
                            }
                        }}
                    >



                        <button type="submit">Delete</button>
                    </Form>
                </div>
            </div>

        </div>
    );
}


const Favorite = ({ contact }) => {
    const favorite = contact.favorite;

    return (

        <Form method="post">


            <button
                name="favorite"
                value={favorite ? "false" : "true"}
                aria-label={favorite
                    ? "Remove from favorites"
                    : "Add to favorites"
                }
            >
                {favorite ? "★" : "☆"}
            </button>
        </Form>
    );

};
