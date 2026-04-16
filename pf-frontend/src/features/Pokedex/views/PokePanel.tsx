import { Box } from "@mui/material";

interface PokePanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export default function PokePanel(props: PokePanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
            gap: 2,
            p: { xs: 2, sm: 3 }
          }}
        >
          {children}
        </Box>
      )}
    </div>
  );
}