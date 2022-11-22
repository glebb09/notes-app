
import { useState } from 'react';

import { CloseIcon, NoteIcon } from '../../../data';
import Button from '../../atoms/button';
import InputField from '../../atoms/inputs/input-field';
import TextareaField from '../../atoms/inputs/textarea-field';

import s from './ModalNote.module.scss';

const ModalNote = () => {

  const [ showModal, setShowModal ] = useState(true);

  return (
    <div className={s.container}>

      { showModal && (

        <div className={[
          s.dialog,
          showModal ? s.showInUp : ''
        ].join(" ")}
        >

          <form className={s.formContainer}>

            <header>
              <section className={s.iconHeadNewNote}>
                <NoteIcon />
                <h3>New Note</h3>
              </section>

              <button 
                className={s.buttonClose}
                type="button"
                onClick={() => setShowModal(false)}
              >
                <CloseIcon className={s.closeIcon} />
              </button>
            </header>

            <div className={s.content}>
              <TextareaField 
                placeholder="Type somthing here..."
              />
            </div>

            <footer>
              <div>
                <Button
                  newClassName="reset"
                  type="reset"
                >
                  Reset
                </Button>
              </div>

              <div>
                <Button
                  newClassName="cancel"
                  type="cancel"
                  media-status="true"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </Button>

                <Button
                  newClassName="confirm"
                  type="confirm"
                >
                  Confirm
                </Button>
              </div>
            </footer>

          </form>

        </div>  

      )} 
    </div>
  )
}

export default ModalNote;


/*
<div className={s.container}>

      { showModal && (

        <div className={[
          s.dialog,
          showModal ? s.showInUp : ''
        ].join(" ")}
        >

          <form className={s.formContainer}>

            <header>
              <section className={s.iconHeadNewNote}>
                <NoteIcon />
                <h3>New Note</h3>
              </section>

              <button 
                className={s.buttonClose}
                type="button"
                onClick={() => setShowModal(false)}
              >
                <CloseIcon />
              </button>
            </header>

            <div className={s.content}>
              <TextareaField 
                placeholder="Type somthing here..."
              />
            </div>

            <footer>
              <div>
                <Button
                  newClassName="reset"
                  type="reset"
                >
                  Reset
                </Button>
              </div>

              <div>
                <Button
                  newClassName="cancel"
                  type="cancel"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </Button>

                <Button
                  newClassName="confirm"
                  type="confirm"
                >
                  Confirm
                </Button>
              </div>
            </footer>

          </form>

        </div>  

      )} 
    </div>

*/