
import { IconButton, Typography } from '@mui/material';
import { JournalLayout } from '../layout/JournalLayout';
import { NoteView, NothingSelectedView } from '../views';
import { AddOutlined } from '@mui/icons-material';

export const JournalPage = () => {
  return (
    <JournalLayout>

      {/* <Typography>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores a, quaerat reiciendis atque vero modi ducimus optio laudantium eius id quo voluptatum vitae animi earum? Est architecto cumque quibusdam nam.</Typography>*/}

      <NothingSelectedView />

      <IconButton
        size='large'
        sx={{
          color:'white',
          backgroundColor: 'error.main',
          ':hover' : { backgroundColor: 'error.main', opacity: 0.9},
          position: 'fixed',
          right: 50,
          bottom: 50
        }}>
        <AddOutlined sx={{ fontSize:30 }}/>
      </IconButton>
      
    </JournalLayout>
  )
}
//<NothingSelectedView />
// <NoteView/>