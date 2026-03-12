import { Box, Typography } from "@mui/material";
import type { Pokemon } from "../../../models/pokemon";
import './styles/PokeBox.scss';

interface PokeBoxProps {
  pokemon: Pokemon
}

export default function PokeBox(props: PokeBoxProps) {
  const { pokemon } = props;
  const formattedId = `#${pokemon.id.toString().padStart(3, "0")}`;

  return (
    <Box
      role="tabpanel"
      sx={{
        width: 200,
        height: 'min-content',
        borderRadius: "20px",
        overflow: "hidden",
        border: "2px solid #0f3f67",
        background: "linear-gradient(165deg, #3c9de8 0%, #1f6ead 50%, #154b78 100%)",
        boxShadow: "0 14px 26px rgba(7, 29, 48, 0.45)",
      }}
    >
      <Box
        sx={{
          px: 1.5,
          pt: 1.5,
          pb: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(180deg, rgba(7, 29, 48, 0.2) 0%, rgba(7, 29, 48, 0) 100%)",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: 164,
            borderRadius: "14px",
            border: "2px solid #0f3f67",
            background: "radial-gradient(circle at 50% 35%, #d0f3ff 0%, #9bd8f7 45%, #4ea6d9 100%)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "inset 0 0 0 2px rgba(255, 255, 255, 0.35)",
          }}
        >
          <Box
            component="img"
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            sx={{
              userSelect: "none",
              transform: 'scale(2)',
              objectFit: "contain",
              imageRendering: "pixelated",
              filter: "drop-shadow(0 8px 8px rgba(3, 27, 46, 0.35))",
            }}
          />
        </Box>
        <div className="types">
          {pokemon.types.map((type) => (
            <Box
              component="img"
              src={type.type.url}
              sx={{
                userSelect: "none",
                width: 80,
              }}
            />
          ))}
        </div>
      </Box>
      <Box
        sx={{
          p: 1.5,
          color: "#f3fbff",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 1,
          borderTop: "2px solid rgba(6, 29, 48, 0.3)",
          background: "linear-gradient(180deg, rgba(8, 42, 68, 0.35) 0%, rgba(5, 30, 48, 0.52) 100%)",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 800,
            lineHeight: 1.1,
            textTransform: "capitalize",
            fontSize: "1.08rem",
            textShadow: "0 1px 0 rgba(0, 0, 0, 0.2)",
          }}
        >
          {pokemon.name}
        </Typography>
        <Box
          sx={{
            px: 1.1,
            py: 0.4,
            borderRadius: "999px",
            border: "1px solid rgba(220, 245, 255, 0.65)",
            background: "rgba(11, 61, 99, 0.7)",
          }}
        >
          <Typography variant="caption" sx={{ color: "#d7f1ff", letterSpacing: 1.1, fontWeight: 700 }}>
            {formattedId}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}