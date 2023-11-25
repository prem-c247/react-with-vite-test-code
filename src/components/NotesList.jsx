import { Button, Table } from "reactstrap";
import { BiEdit } from "react-icons/bi";
import { FiTrash } from "react-icons/fi";

const NotesList = (props) => {
    const { users } = props
    return (
        <>
            <Table hover>
                <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>
                            Title
                        </th>
                        <th>
                            Approved
                        </th>
                        <th>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {users?.map(userItem => {
                        return (<tr key={userItem.id} >
                            <th scope="row">
                                {userItem.id}
                            </th>
                            <td>
                                {userItem.title}
                            </td>
                            <td>
                                {userItem.completed === true ? "Yes" : "No"}
                            </td>
                            <td>
                                <Button color="primary" onClick={() => alert("Completed")}>
                                    <BiEdit className="primary" />
                                </Button>
                                <Button color="danger" className="top-3" onClick={() => alert("Completed")}>
                                    <FiTrash />
                                </Button>
                            </td>
                        </tr>
                        )
                    })}
                    {/* <tr>
                        <th scope="row">
                            1
                        </th>
                        <td>
                            Mark
                        </td>
                        <td>
                            Otto
                        </td>
                        <td>
                            @mdo
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            2
                        </th>
                        <td>
                            Jacob
                        </td>
                        <td>
                            Thornton
                        </td>
                        <td>
                            @fat
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            3
                        </th>
                        <td>
                            Larry
                        </td>
                        <td>
                            the Bird
                        </td>
                        <td>
                            @twitter
                        </td>
                    </tr> */}
                </tbody>
            </Table >
        </>
    )
}

export default NotesList