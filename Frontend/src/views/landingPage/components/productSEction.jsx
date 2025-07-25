// import { Box, Typography, Button, Grid, Card, CardMedia, CardContent, IconButton, Chip, Tooltip } from '@mui/material';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
// import ZoomInIcon from '@mui/icons-material/ZoomIn';
// import StarIcon from '@mui/icons-material/Star';
// import User1 from 'assets/images/users/user-round.svg';

// const productData = [
//   {
//     title: 'Xoggle aute et pariatur adipisicing nostrud et...',
//     image: User1,
//     rating: 3,
//     price: '$24.55',
//     salePrice: '$17.79',
//     stock: 20
//   },
//   {
//     title: 'Geeky ipsum esse repreh est consequat',
//     image: User1,
//     rating: 4,
//     price: '$24.55',
//     salePrice: '$17.79',
//     stock: 20
//   },
//   {
//     title: 'Conjurica ea magna eiusmod esse cupt anim...',
//     image: User1,
//     rating: 5,
//     price: '$32.63',
//     salePrice: '$18.03',
//     tag: 'POPULAR'
//   }
// ];

// const ProductSection = () => {
//   return (
//     <Box sx={{ p: 4, background: '#f9f9f9' }}>
//       <Grid container spacing={3}>
//         {/* LEFT BANNER */}
//         <Grid item xs={12} md={3}>
//           <Box
//             sx={{
//               background: '#c6e3fb',
//               p: 3,
//               height: '100%',
//               borderRadius: 2,
//               display: 'flex',
//               flexDirection: 'column',
//               justifyContent: 'space-between',
//               alignItems: 'start'
//             }}
//           >
//             <Box>
//               <Typography fontWeight="bold">Mobile & Tablet</Typography>
//               {['Xioami', 'Apple', 'Google', 'Samsung'].map((item) => (
//                 <Typography key={item} sx={{ color: '#555', fontSize: 14, mt: 1 }}>
//                   {item}
//                 </Typography>
//               ))}
//               <Typography
//                 sx={{
//                   mt: 2,
//                   fontWeight: 600,
//                   cursor: 'pointer',
//                   display: 'inline-block'
//                 }}
//               >
//                 Shop Now →
//               </Typography>
//             </Box>
//             <Box
//               component="img"
//               src={User1}// replace with actual watch+pods image
//               alt="watch"
//               sx={{ width: '100%', maxWidth: 150, alignSelf: 'center', mt: 2 }}
//             />
//           </Box>
//         </Grid>

//         {/* PRODUCT CARDS */}
//         {productData.map((product, i) => (
//           <Grid item xs={12} sm={6} md={3} key={i}>
//             <Card
//               sx={{
//                 position: 'relative',
//                 borderRadius: 2,
//                 overflow: 'hidden',
//                 '&:hover .hover-icons': { opacity: 1, transform: 'translateY(0)' }
//               }}
//             >
//               <Box sx={{ position: 'relative', p: 2 }}>
//                 {/* Product Image */}
//                 <CardMedia component="img" height="160" image={product.image} alt={product.title} sx={{ objectFit: 'contain' }} />

//                 {/* Right Hover Icons */}
//                 <Box
//                   className="hover-icons"
//                   sx={{
//                     position: 'absolute',
//                     top: 10,
//                     right: 10,
//                     display: 'flex',
//                     flexDirection: 'column',
//                     gap: 1,
//                     opacity: 0,
//                     transform: 'translateY(10px)',
//                     transition: 'all 0.3s ease-in-out'
//                   }}
//                 >
//                   <Tooltip title="View">
//                     <IconButton size="small" sx={{ background: '#fff' }}>
//                       <ZoomInIcon />
//                     </IconButton>
//                   </Tooltip>
//                   <Tooltip title="Wishlist">
//                     <IconButton size="small" sx={{ background: '#fff' }}>
//                       <FavoriteBorderIcon />
//                     </IconButton>
//                   </Tooltip>
//                   <Tooltip title="Compare">
//                     <IconButton size="small" sx={{ background: '#fff' }}>
//                       <CompareArrowsIcon />
//                     </IconButton>
//                   </Tooltip>
//                 </Box>
//               </Box>

//               <CardContent>
//                 {/* Rating */}
//                 <Box display="flex" gap={0.5} mb={1}>
//                   {[...Array(5)].map((_, idx) => (
//                     <StarIcon key={idx} sx={{ fontSize: 18, color: idx < product.rating ? '#ffc107' : '#ddd' }} />
//                   ))}
//                 </Box>

//                 {/* Title */}
//                 <Typography variant="body2" sx={{ fontWeight: 500, mb: 1 }}>
//                   {product.title}
//                 </Typography>

//                 {/* Price */}
//                 <Box display="flex" alignItems="center" gap={1}>
//                   <Typography sx={{ textDecoration: 'line-through', color: '#999', fontSize: 14 }}>{product.price}</Typography>
//                   <Typography sx={{ color: 'red', fontWeight: 'bold', fontSize: 16 }}>{product.salePrice}</Typography>
//                 </Box>

//                 {/* Add to Cart Button */}
//                 <Button
//                   variant="contained"
//                   fullWidth
//                   sx={{
//                     mt: 2,
//                     backgroundColor: '#fdd835',
//                     color: '#000',
//                     '&:hover': { backgroundColor: '#fbc02d' }
//                   }}
//                 >
//                   Add To Cart
//                 </Button>

//                 {/* Stock Bar or Tag */}
//                 {product.stock && (
//                   <Box mt={2}>
//                     <Typography variant="caption">Products Available</Typography>
//                     <Box
//                       sx={{
//                         width: '100%',
//                         height: 6,
//                         backgroundColor: '#eee',
//                         borderRadius: 3,
//                         mt: 0.5
//                       }}
//                     >
//                       <Box
//                         sx={{
//                           width: `${product.stock}%`,
//                           height: '100%',
//                           backgroundColor: '#f9a825',
//                           borderRadius: 3
//                         }}
//                       />
//                     </Box>
//                   </Box>
//                 )}

//                 {product.tag && (
//                   <Chip
//                     label={product.tag}
//                     color="success"
//                     size="small"
//                     sx={{
//                       position: 'absolute',
//                       top: 12,
//                       right: 12,
//                       fontWeight: 'bold'
//                     }}
//                   />
//                 )}
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default ProductSection;
import { Box, Typography, Button, Grid, Card, CardMedia, CardContent, IconButton,Chip, Tooltip } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import StarIcon from '@mui/icons-material/Star';
import User1 from 'assets/images/users/user-round.svg';

const products = [
  {
    image: User1,
    title: 'Xoggle aute et pariatur adipisicing nostrud et...',
    rating: 3,
    price: '$24.55',
    salePrice: '$17.79',
    stock: 20
  },
  {
    image: User1,
    title: 'Geeky ipsum esse repreh est consequat',
    rating: 4,
    price: '$32.00',
    salePrice: '$24.49'
  },
  {
    image: User1,
    title: 'Conjurica ea magna eiusmod esse cupt anim...',
    rating: 5,
    price: '$32.63',
    salePrice: '$18.03',
    tag: 'POPULAR'
  }
];

const ProductCard = ({ product }) => {
  return (
    <Card
      sx={{
        borderRadius: 2,
        overflow: 'hidden',
        position: 'relative',
        transition: 'all 0.3s ease',
        '&:hover .right-icons': {
          opacity: 1,
          transform: 'translateY(0)'
        },
        '&:hover .bottom-cart': {
          transform: 'translateY(0)',
          opacity: 1
        }
      }}
    >
      <Box sx={{ position: 'relative', p: 2, pb: 0 }}>
        {/* Image */}
        <CardMedia
          component="img"
          image={product.image}
          alt={product.title}
          sx={{
            height: 160,
            objectFit: 'contain',
            mx: 'auto'
          }}
        />

        {/* Right Hover Icons */}
        <Box
          className="right-icons"
          sx={{
            position: 'absolute',
            top: 10,
            right: 10,
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            opacity: 0,
            transform: 'translateY(10px)',
            transition: 'all 0.3s ease'
          }}
        >
          <Tooltip title="View">
            <IconButton size="small" sx={{ bgcolor: '#fff' }}>
              <ZoomInIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Wishlist">
            <IconButton size="small" sx={{ bgcolor: '#fff' }}>
              <FavoriteBorderIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Compare">
            <IconButton size="small" sx={{ bgcolor: '#fff' }}>
              <CompareArrowsIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>

      {/* Content Area */}
      <CardContent
        sx={{
          pt: 1,
          pb: '60px', // reserve space for Add to Cart
          position: 'relative'
        }}
      >
        {/* Rating */}
        <Box display="flex" gap={0.5} mb={1}>
          {[...Array(5)].map((_, idx) => (
            <StarIcon key={idx} fontSize="small" sx={{ color: idx < product.rating ? '#ffc107' : '#ddd' }} />
          ))}
        </Box>

        {/* Title */}
        <Typography variant="body2" fontWeight={500}>
          {product.title}
        </Typography>

        {/* Price */}
        <Box mt={1} display="flex" gap={1} alignItems="center">
          <Typography
            sx={{
              textDecoration: 'line-through',
              color: '#999',
              fontSize: 14
            }}
          >
            {product.price}
          </Typography>
          <Typography sx={{ color: 'red', fontWeight: 600, fontSize: 16 }}>{product.salePrice}</Typography>
        </Box>

        {/* Add to Cart (hover bottom slide) */}
        <Box
          className="bottom-cart"
          sx={{
            position: 'absolute',
            left: 16,
            right: 16,
            bottom: 16,
            transform: 'translateY(20px)',
            opacity: 0,
            transition: 'all 0.3s ease'
          }}
        >
          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: '#fdd835',
              color: '#000',
              fontWeight: 600,
              '&:hover': {
                backgroundColor: '#fbc02d'
              }
            }}
          >
            Add To Cart
          </Button>
        </Box>
        {product.stock && (
          <Box mt={2}>
            <Typography variant="caption">Products Available</Typography>
            <Box
              sx={{
                width: '100%',
                height: 6,
                backgroundColor: '#eee',
                borderRadius: 3,
                mt: 0.5
              }}
            >
              <Box
                sx={{
                  width: `${product.stock}%`,
                  height: '100%',
                  backgroundColor: '#f9a825',
                  borderRadius: 3
                }}
              />
            </Box>
          </Box>
        )}

        {product.tag && (
          <Chip
            label={product.tag}
            color="success"
            size="small"
            sx={{
              position: 'absolute',
              top: 12,
              right: 12,
              fontWeight: 'bold'
            }}
          />
        )}
      </CardContent>
    </Card>
  );
};

const ProductSection = () => {
  return (
    <Box sx={{ p: 4, backgroundColor: '#f9f9f9' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Box
            sx={{
              background: '#c6e3fb',
              p: 3,
              height: '100%',
              borderRadius: 2,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'start'
            }}
          >
            <Box>
              <Typography fontWeight="bold">Mobile & Tablet</Typography>
              {['Xioami', 'Apple', 'Google', 'Samsung'].map((item) => (
                <Typography key={item} sx={{ color: '#555', fontSize: 14, mt: 1 }}>
                  {item}
                </Typography>
              ))}
              <Typography
                sx={{
                  mt: 2,
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'inline-block'
                }}
              >
                Shop Now →
              </Typography>
            </Box>
            <Box
              component="img"
              src={User1} // replace with actual watch+pods image
              alt="watch"
              sx={{ width: '100%', maxWidth: 150, alignSelf: 'center', mt: 2 }}
            />
          </Box>
        </Grid>
        {products.map((product, idx) => (
          <Grid item xs={12} sm={6} md={3} key={idx}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductSection;
