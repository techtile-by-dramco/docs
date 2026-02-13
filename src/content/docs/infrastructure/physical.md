---
title: Physical Structure & Spatial Layout
description: Geometry, tile segmentation, and mounting model of the Techtile room.
component: physical
status: reviewed
last_verified: 2026-02-13
sensitivity: internal
---

## Scope

Physical room geometry, tile composition, and spatial naming conventions used by all other subsystems.

## Deployed Facts

- Room dimensions are documented as `8 m x 4 m x 2.4 m`.
- The structure uses `140` detachable tiles.
- Tile dimensions are documented as `120 cm x 60 cm` with a `5 cm x 5 cm` mounting grid.
- Floor plan assets use segment-style labels (`A` through `G`) and tile indexing.
- Overlay concept is used for line-of-sight technologies (acoustic and visible-light use cases).

## Grondplan

<img src="../../grondplan/plan.svg" alt="Techtile grondplan" />

- Vector plan: [`../../grondplan/plan.svg`](../../grondplan/plan.svg)
- PDF plan: [`../../grondplan/plan.pdf`](../../grondplan/plan.pdf)

## Interfaces

- **To network/power**: each tile has mapped Ethernet/PoE connectivity via patch-midspan-switch tables.
- **To RF/Qualisys/acoustics**: overlays or front-side mounts expose sensors/actuators to room interior.

## Constraints and Risks

- Physical relocation of tile-mounted gear invalidates calibration/mapping assumptions in downstream systems.
- Floor plan references are spread over PDF/SVG/PPTX and require synchronized updates.

## Depends On

- No upstream technical dependency; this is the base layer.

## Provides To

- Network switchport mapping
- PoE and midspan planning
- RF clock and antenna placement
- Qualisys camera/volume setup

## Critical Paths

- Tile coordinate changes require re-validation in network, timing, and DAQ experiment definitions.
