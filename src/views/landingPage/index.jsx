import { Box, Typography, Button, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const BannerSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        gap: 2,
        p: 2
      }}
    >
      {/* Left Banner */}
      <Box
        sx={{
          flex: 1,
          p: 4,
          bgcolor: '#f2f9f6',
          borderRadius: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
      >
        <Typography
          variant="caption"
          sx={{
            bgcolor: '#fff',
            color: '#000',
            borderRadius: 10,
            px: 1.5,
            py: 0.5,
            width: 'fit-content',
            mb: 2,
            fontWeight: 600
          }}
        >
          NEW RELEASED
        </Typography>
        <Typography variant="subtitle2" sx={{ color: '#222', mb: 1,fontSize:'24px' }}>
          Design Safe
        </Typography>
        <Typography sx={{ fontWeight: 'bold', color: '#000', mb: 1, fontSize:'45px' }}>
          Pouf Ottomans cloth
        </Typography>
        <Typography variant="body1" sx={{ color: '#1c7b6c', mb: 2,fontSize:'24px' }}>
          Special-shaped sofa for sale
        </Typography>
        <Button
          variant="contained"
          sx={{
            width: 'fit-content',
            bgcolor: '#1c7b6c',
            textTransform: 'none',
            px: 3,
            py: 1,
            borderRadius: 1,
            '&:hover': { bgcolor: '#145e53' }
          }}
        >
          Shop Now
        </Button>
        <Box
          component="img"
          src="https://i.ibb.co/dtv3HTq/sofa1.png"
          alt="sofa"
          sx={{
            width: '100%',
            maxWidth: 250,
            alignSelf: 'center',
            mt: 3
          }}
        />
      </Box>

      {/* Right Banner */}
      <Box
        sx={{
          flex: 1,
          p: 4,
          bgcolor: '#fff5e7',
          borderRadius: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
      >
        <Typography
          variant="caption"
          sx={{
            bgcolor: '#fff',
            color: '#000',
            borderRadius: 10,
            px: 1.5,
            py: 0.5,
            width: 'fit-content',
            mb: 2,
            fontWeight: 600
          }}
        >
          RELEXT SOFA
        </Typography>
        <Typography variant="subtitle2" sx={{ color: '#222', mb: 1,fontSize:'24px' }}>
          Design Safe
        </Typography>
        <Typography sx={{ fontWeight: 'bold', color: '#000', mb: 1, fontSize:'45px' }}>
          Motozed Reclein Sofa
        </Typography>
        <Typography variant="body1" sx={{ color: '#1c7b6c', mb: 2,fontSize:'24px' }}>
          Special-shaped sofa for sale
        </Typography>
        <Button
          variant="contained"
          sx={{
            width: 'fit-content',
            bgcolor: '#f5b100',
            textTransform: 'none',
            px: 3,
            py: 1,
            borderRadius: 1,
            color: '#000',
            '&:hover': { bgcolor: '#d49c00' }
          }}
        >
          Shop Now
        </Button>
        <Box
          component="img"
          src="https://i.ibb.co/gMKrN06/sofa2.png"
          alt="hanging chair"
          sx={{
            width: '100%',
            maxWidth: 250,
            alignSelf: 'center',
            mt: 3
          }}
        />
      </Box>
    </Box>
  );
};

export default BannerSection;
