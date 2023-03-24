import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
// import { useTheme } from '@mui/material/styles';
import { Grid, Container, Box, Typography, Divider } from '@mui/material';

// sections
import { RecentUpdateProduct, PurchesShopOvervews, ExpiredProduct} from '../sections/@dashboard/app';
import { FaCartArrowDown } from 'react-icons/fa';
import { AiOutlineUserAdd, AiTwotoneCopy } from 'react-icons/ai';
import CustomarOvervew from 'src/sections/@dashboard/app/CustomarOvervew';
import AppWidgetSummary from 'src/sections/@dashboard/app/AppWidgetSummary';

// ----------------------------------------------------------------------

const totalbalanceSummary = [
  {
    title: 'Total Purchase Due',
    total: 831,
    color: 'info',
    icon: FaCartArrowDown,
  },
  {
    title: 'Total Sales Due',
    total: 175,
    color: 'warning',
    icon: FaCartArrowDown,
  },
  {
    title: 'Total Sale Amount',
    total: 2234,
    color: 'info',
    icon: FaCartArrowDown,
  },
  {
    title: 'Total Purchase Amount',
    total: 4000,
    color: 'warning',
    icon: FaCartArrowDown,
  },
];

const customarOvervewsData = [
  {
    title: 'Customers',
    total: 100,
    color: 'info',
    // icon: AiOutlineUser,
    icon: 'https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png',
  },
  {
    title: 'Suppliers',
    total: 100,
    color: 'warning',
    icon: AiOutlineUserAdd,
  },
  {
    title: 'Purchase Invoice',
    total: 100,
    color: 'info',
    icon: AiTwotoneCopy,
  },
  {
    title: 'Sales Invoice',
    total: 100,
    color: 'warning',
    icon: AiTwotoneCopy,
  },
];

// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard | Management</title>
      </Helmet>

      <Container maxWidth="xl">
        <Grid container spacing={3} mb={5}>
          {totalbalanceSummary.map((item, index) => {
            return (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <AppWidgetSummary title={item.title} total={item.total} color={item.color} icon={item.icon} />
              </Grid>
            );
          })}
        </Grid>

        <Grid container spacing={3} mb={5}>
          {customarOvervewsData?.map((item, index) => {
            return (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <CustomarOvervew title={item.title} total={item.total} color={item.color} icon={item?.icon} />
              </Grid>
            );
          })}
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={8}>
            <PurchesShopOvervews
              title="Purchase & Sales"
              subheader="2023"
              chartLabels={[
                '01/01/2023',
                '02/01/2023',
                '03/01/2023',
                '04/01/2023',
                '05/01/2023',
                '06/01/2023',
                '07/01/2023',
                '08/01/2023',
                '09/01/2023',
                '10/01/2023',
                '11/01/2023',
              ]}
              chartData={[
                {
                  name: 'Sales',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: 'Purchase',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                // {
                //   name: 'Team C',
                //   type: 'line',
                //   fill: 'solid',
                //   data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                // },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <RecentUpdateProduct
              title="Recently Added Products"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: faker.name.jobTitle(),
                index: index,
                price: faker.price,
                image: `/assets/images/covers/cover_${index + 1}.jpg`,
                postedAt: faker.date.recent(),
              }))}
            />
          </Grid>
        </Grid>

        <Grid xs={12} md={12} lg={12}>
          <Box mb={4}>
            <Typography variant="h3" component="h4">
              Expired Products
            </Typography>
            <Divider></Divider>
          </Box>
          <ExpiredProduct ></ExpiredProduct>
        </Grid>
      </Container>
    </>
  );
}
