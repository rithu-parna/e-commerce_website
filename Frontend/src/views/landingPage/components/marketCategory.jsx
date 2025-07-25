// import { Box, Grid, Typography, Button } from '@mui/material';

// const categories = [
//   { label: 'Sofa', icon: '/icons/sofa.png' },
//   { label: 'TV Cabinet', icon: '/icons/tv-cabinet.png' },
//   { label: 'Dining', icon: '/icons/dining.png' },
//   { label: 'Wordrobe', icon: '/icons/wardrobe.png' },
//   { label: 'Bed', icon: '/icons/bed.png' },
//   { label: 'Dressing Table', icon: '/icons/dressing-table.png' },
//   { label: 'Door', icon: '/icons/door.png' },
//   { label: 'Divan', icon: '/icons/divan.png' },
//   { label: 'Office', icon: '/icons/office-chair.png' },
//   { label: 'Kitchen', icon: '/icons/kitchen.png' },
//   { label: 'Lamp', icon: '/icons/lamp.png' },
//   { label: 'Reading Table', icon: '/icons/reading-table.png' },
//   { label: 'Mattress', icon: '/icons/mattress.png' },
//   { label: 'Chest Drawers', icon: '/icons/drawer.png' },
//   { label: 'Windows', icon: '/icons/window.png' },
//   { label: 'Miscellaneous', icon: '/icons/miscellaneous.png' }
// ];

// const CategoryGrid = () => {
//   return (
//     <Box sx={{ px: 3, py: 5 }}>
//       {/* Header */}
//       <Box
//         sx={{
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           mb: 4
//         }}
//       >
//         <Typography variant="h5" fontWeight="bold">
//           My Market Category
//         </Typography>
//         <Button endIcon={<span style={{ fontSize: '1.2rem' }}>→</span>} sx={{ textTransform: 'none', color: '#000', fontWeight: 600 }}>
//           View More
//         </Button>
//       </Box>

//       {/* Grid */}
//       <Grid container spacing={3}>
//         {categories.map((item, index) => (
//           <Grid item xs={4} sm={3} md={2} key={index} sx={{ textAlign: 'center' }}>
//             <Box
//               sx={{
//                 width: 80,
//                 height: 80,
//                 borderRadius: '50%',
//                 bgcolor: index % 4 === 0 ? '#e8f0ef' : '#f6f8f9',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 margin: '0 auto'
//               }}
//             >
//               <Box component="img" src={item.icon} alt={item.label} sx={{ width: 36, height: 36 }} />
//             </Box>
//             <Typography variant="body2" sx={{ mt: 1, fontSize: 14, fontWeight: 500 }}>
//               {item.label}
//             </Typography>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default CategoryGrid;
import { Box, Typography, Grid, Avatar } from '@mui/material';
import WeekendIcon from '@mui/icons-material/Weekend'; // Sofa
import KitchenIcon from '@mui/icons-material/Kitchen';
import ChairIcon from '@mui/icons-material/Chair';
import BedIcon from '@mui/icons-material/Bed';
import DoorFrontIcon from '@mui/icons-material/DoorFront';
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';
import WysiwygIcon from '@mui/icons-material/Wysiwyg'; // Drawer
import LightIcon from '@mui/icons-material/Light';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';

const categories = [
  { label: 'Sofa', icon: <WeekendIcon /> },
  { label: 'TV Cabinet', icon: <WysiwygIcon /> },
  { label: 'Dining', icon: <TableRestaurantIcon /> },
  { label: 'Wardrobe', icon: <KitchenIcon /> },
  { label: 'Bed', icon: <BedIcon /> },
  { label: 'Dressing Table', icon: <ChairIcon /> },
  { label: 'Door', icon: <DoorFrontIcon /> },
  { label: 'Divan', icon: <WeekendIcon /> },
  { label: 'Office', icon: <ChairIcon /> },
  { label: 'Kitchen', icon: <KitchenIcon /> },
  { label: 'Lamp', icon: <LightIcon /> },
  { label: 'Reading Table', icon: <TableRestaurantIcon /> },
  { label: 'Mattress', icon: <WeekendIcon /> },
  { label: 'Chest Drawers', icon: <WysiwygIcon /> },
  { label: 'Windows', icon: <DoorFrontIcon /> },
  { label: 'Miscellaneous', icon: <MiscellaneousServicesIcon /> }
];

const MarketCategory = () => {
  return (
    <Box sx={{ px: 4, py: 6 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
        <Typography sx={{ fontSize: '32px' }} fontWeight="bold">
          My Market Category
        </Typography>
        <Typography sx={{ display: 'flex', alignItems: 'center', fontWeight: 500, cursor: 'pointer' }}>View More →</Typography>
      </Box>

      <Grid container spacing={3} sx={{display:'flex',justifyContent:'center'}}>
        {categories.map((item) => (
          <Grid key={item.label} item xs={6} sm={4} md={2} lg={2}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 1
              }}
            >
              <Avatar
                sx={{
                  bgcolor: '#f1f4f4',
                  width: 80,
                  height: 80,
                  color: '#000'
                }}
              >
                {item.icon}
              </Avatar>
              <Typography variant="body2" textAlign="center">
                {item.label}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MarketCategory;
