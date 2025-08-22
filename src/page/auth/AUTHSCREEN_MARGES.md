# Marges et espacements – `Authscreen`

Composant: `Sweb_test/src/page/auth/authscreen.jsx`

## Résumé
- Objectif layout: header en haut, bloc texte+boutons en bas, marges horizontales équitables, conteneur centré à 360px.
- Le composant utilise très peu de marges; l’alignement est obtenu via `position: absolute` (bottom) et `mx-auto`.

## Détails par bloc

- **Header** (`<header className="w-full px-4 py-4 flex justify-start md:justify-center">`)
  - Marges: aucune
  - Padding: `px-4` (16px), `py-4` (16px)
  - Remarque: centrage horizontal via `justify-center` à partir de `md`.

- **Bloc bas (wrapper fixe)** (`<div className="absolute left-0 right-0 bottom-[32px] px-4 sm:px-6 lg:px-8">`)
  - Marges: aucune
  - Padding horizontal: `px-4` (16px) / `sm:px-6` (24px) / `lg:px-8` (32px)
  - Position: `bottom-[32px]` (32px du bas)

- **Conteneur centré** (`<div className="max-w-[360px] mx-auto flex flex-col items-start gap-3 sm:gap-4 w-full">`)
  - Marges: `mx-auto` (centrage horizontal, marges gauche/droite automatiques)
  - Gap: `gap-3` (12px) / `sm:gap-4` (16px)

- **Bloc titre** (`<div className="w-full text-left">`)
  - Marges: aucune

  - `h1`
    - Marges: aucune (m-0 implicite via classes Tailwind utilisées; aucun `mt`/`mb` explicite)

  - `p` (`<p className="mt-1 text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed ...">`)
    - Marges: `mt-1` (4px de marge supérieure)

- **Stack de boutons** (`<div className="flex flex-col gap-2 sm:gap-3 w-full">`)
  - Marges: aucune
  - Gap vertical: `gap-2` (8px) / `sm:gap-3` (12px)

- **Boutons `<Button />`**
  - Marges: aucune côté composant parent (`fullWidth` = largeur 100%)

## Notes
- L’équité des marges horizontales sur mobile est assurée par:
  - `px-4` sur le wrapper bas + `mx-auto` sur le conteneur à `max-w-[360px]`.
- Le décalage bas constant est `bottom-[32px]` (équivalent à 32px de “marge visuelle” par rapport au bord inférieur, via positionnement absolu).
- Ajustements rapides possibles:
  - Espace au-dessus du texte: modifier `mt-1` du `<p>`.
  - Espacement vertical global des éléments: modifier `gap-3` / `sm:gap-4`.
  - Décalage du bloc bas: modifier `bottom-[32px]`.
