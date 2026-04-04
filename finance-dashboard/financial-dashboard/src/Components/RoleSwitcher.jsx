

export default function RoleSwitcher({ role, setRole }) {
    return (
        <div className='mt-4'>
            <label className="mr-2">Role:</label>
            <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="border p-1"
            >
                <option>Viewer</option>
                <option>Admin</option>
            </select>
        </div>
    );
}
