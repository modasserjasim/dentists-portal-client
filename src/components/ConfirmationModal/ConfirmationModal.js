import React from 'react';

const ConfirmationModal = ({ deletingDoctor, setDeletingDoctor, handleDoctorDelete }) => {
    return (
        <div>
            {/* The button to open modal */}
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Are you sure you want to delete?</h3>
                    <p className="py-4">If you delete {deletingDoctor.name}, It can't be undone!</p>
                    <div className="modal-action">
                        <label onClick={() => handleDoctorDelete(deletingDoctor)} htmlFor="confirmation-modal" className="btn btn-danger">Yes</label>
                        <button onClick={() => setDeletingDoctor(null)} className='btn btn-primary'>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;