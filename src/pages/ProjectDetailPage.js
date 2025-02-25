import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HomeIcon from '@mui/icons-material/Home';

function ProjectDetailPage() {
    const navigate = useNavigate();
    
    // Other code...
    
    return (
        <Container>
            {/* Project content... */}
            
            <Box sx={{ mt: 4, display: 'flex', justifyContent: 'space-between' }}>
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={() => navigate('/projects')}
                    startIcon={<ArrowBackIcon />}
                >
                    Back to Projects
                </Button>
                
                <Button 
                    variant="outlined" 
                    color="primary" 
                    onClick={() => navigate('/')}
                    startIcon={<HomeIcon />}
                >
                    Home
                </Button>
            </Box>
        </Container>
    );
} 