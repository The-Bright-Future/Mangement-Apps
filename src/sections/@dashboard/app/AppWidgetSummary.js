// @mui
import PropTypes from 'prop-types';
import { alpha, styled } from '@mui/material/styles';
import { Box, Card, Typography, Avatar } from '@mui/material';

// ----------------------------------------------------------------------

const StyledIcon = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
}));

// ----------------------------------------------------------------------

AppWidgetSummary.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  sx: PropTypes.object,
};

export default function AppWidgetSummary({ title, total, icon, color = 'primary', sx, ...other }) {
  return (
    <Card
      sx={{
        display: 'flex',
        alignItems: 'center',
        padding: 3,
        justifyContent: 'space-around',
        gap: 2,
        boxShadow: 0,
        ...sx,
      }}
      {...other}
    >
      <div>
        <StyledIcon
          sx={{
            color: (theme) => theme.palette[color].dark,
            backgroundImage: (theme) =>
              `linear-gradient(135deg, ${alpha(theme.palette[color].dark, 0)} 0%, ${alpha(
                theme.palette[color].dark,
                0.24
              )} 100%)`,
          }}
        >
          <Avatar alt={title} src={icon} sx={{ width: 56, height: 56 }} />
        </StyledIcon>
      </div>

      <div>
        <Box>
          <Typography variant="p">$ {total}</Typography> <br />
          <Typography variant="subtitle3" sx={{ opacity: 0.72 }}>
            {title}
          </Typography>
        </Box>
      </div>
    </Card>
  );
}
