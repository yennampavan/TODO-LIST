export default function EditModal({ value, change, onClose, isOpen, onSubmit }) {
    return isOpen ? (
        <div className="edit-modal">
            <input value={value} onChange={e => change(e.target.value)} />
            <div className="modal-footer">
                <button onClick={onSubmit} className="update-btn" type="button">Update</button>
                <button onClick={onClose} className="close-btn" type="button">Close</button>
            </div>

        </div>
    ) : <></>
}