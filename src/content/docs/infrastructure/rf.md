---
title: RF Subsystem (Clock, Antennas, Distribution)
description: Octoclock and antenna assets used for RF timing and experimentation.
component: rf
status: reviewed
last_verified: 2026-02-13
sensitivity: internal
---

## Scope

RF clock and antenna assets that support synchronized SDR-based experiments.

## Deployed Facts

- Octoclock assets include mapping spreadsheets and a floor-plan location deck.
- Mapping files use segment naming (`SEGMENT A..G`) and `TNR`-style identifiers.
- Procurement artifact indicates deployment of Ettus `CDA-2990` clock distribution accessories.
- Antenna design branch contains patch design scripts, CAD, gerbers, and measurements.
- Antenna README documents a center-frequency shift toward ~`915 MHz` after geometry adjustment.
- `patch.py` encodes design parameters around `917 MHz` with specified substrate assumptions.

## B210

RF experiments are executed on per-tile SDR endpoints. For tile-side platform details and operational context, see [Tile Node Platform](/infrastructure/tile-node/).
Investigation repository for B210 synchronization methods: <https://github.com/techtile-by-dramco/NI-B210-Sync>.

## Octoclocks

Octoclocks provide the RF timing distribution reference for synchronized operation. For timing architecture and synchronization context, see [Time & Synchronization](/infrastructure/time/).

## Patch antenna

The broadband patch antenna design and measurement artifacts are part of the RF toolchain. The plot below shows the 920 MHz centered span view used in the antenna measurements.

![Techtile 920 MHz patch antenna measurement (center 920 MHz, span 400 MHz)](/rf/Techtile-920MHz-antenna-center-920MHz-span-400MHz.png)

## Interfaces

- **Upstream**: timing reference and power/network availability.
- **Downstream**: SDR tiles consuming distributed clock/reference and RF path assets.

## Constraints and Risks

- RF mapping truth is split across xlsx/pptx and not centralized in one machine-readable contract.
- Procurement docs are not topology docs; verify final installation against floor-plan assets.
- RF chain coherence depends on both clock path and per-tile SDR configuration.

## Depends On

- Tile endpoint availability.
- Stable timing and power distribution.

## Provides To

- RF experiment reproducibility (clocking and placement references).

## Critical Paths

- Clock distribution interruption invalidates coherent multi-node RF experiments.
- Segment/TNR mapping errors can invalidate experiment localization assumptions.
