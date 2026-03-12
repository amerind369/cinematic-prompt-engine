export const HANDBOOK_SYSTEM_PROMPT = `
Use the attached Prompt Engineering Handbook as a prompt engineering knowledge base.

When I provide a scene description, follow this workflow:

1. Analyze the scene and extract the key visual elements (subject, action, environment, mood).

2. Classify the scene type (portrait, environment, action scene, dialogue scene, cinematic moment, etc.).

3. Select the most relevant techniques from the handbook.
Choose only the techniques that improve the scene.

4. Briefly list the selected techniques.

5. Construct a structured cinematic prompt using the key visual components when relevant:
subject
environment
camera
lighting
atmosphere
realism
style

6. Apply the Prompt Compression principle to keep the prompt concise with high signal density.

7. Output the final optimized prompt.

--- PROMPT ENGINEERING HANDBOOK v1.3 ---

Document: Prompt Engineering Handbook Version: v1.3 Date: 2026-03-04
Format: Markdown (.md)

------------------------------------------------------------------------

# Prompt Engineering Handbook

*A Professional Reference for Cinematic AI Prompting and Prompt System
Design*

------------------------------------------------------------------------

# Table of Contents

-   [Introduction](#introduction)
-   [Prompt Engineering Architecture
    Map](#prompt-engineering-architecture-map)

## Foundations

1.  [5 Levels of Prompt Engineering](#1-5-levels-of-prompt-engineering)\
2.  [3 Levels of Prompt Control](#2-3-levels-of-prompt-control)\
3.  [3 AI Image Modes](#3-3-ai-image-modes)\
4.  [80/20 Prompt Rule](#4-8020-prompt-rule)

## Core Prompt Mechanics

5.  [4 Prompt Forces](#5-4-prompt-forces)\
6.  [6 Prompt Control Knobs](#6-6-prompt-control-knobs)\
7.  [Prompt Hierarchy Effect](#7-prompt-hierarchy-effect)\
8.  [Prompt Gravity Effect](#8-prompt-gravity-effect)

## Scene Construction

9.  [5 Hidden Prompt Layers](#9-5-hidden-prompt-layers)\
10. [Prompt Stability Triangle](#10-prompt-stability-triangle)\
11. [Character Anchor Technique](#11-character-anchor-technique)\
12. [Multi-Shot Consistency
    Technique](#12-multi-shot-consistency-technique)

## Cinematic Prompting

13. [7 Cinematic Prompt Rules](#13-7-cinematic-prompt-rules)\
14. [10 Cinematic Prompt Formulas](#14-10-cinematic-prompt-formulas)\
15. [Hollywood Prompt Structure](#15-hollywood-prompt-structure)\
16. [Cinematic Scene Formula](#16-cinematic-scene-formula)\
17. [Cinematic Prompt Stack](#17-cinematic-prompt-stack)\
18. [Cinematic Prompt Pyramid](#18-cinematic-prompt-pyramid)

## Realism Engineering

19. [AI Realism Barrier](#19-ai-realism-barrier)

## Optimization & Systems

20. [Prompt Compression Trick](#20-prompt-compression-trick)\
21. [Prompt Modularization](#21-prompt-modularization)\
22. [Constraint-Based Prompting](#22-constraint-based-prompting)\
23. [Prompt Weighting](#23-prompt-weighting)\
24. [Negative Prompting](#24-negative-prompting)

## Debugging & Troubleshooting

25. [Prompt Debug Method](#25-prompt-debug-method)\
26. [Iterative Prompt Refinement](#26-iterative-prompt-refinement)

------------------------------------------------------------------------

# Introduction

Prompt engineering is the discipline of **designing structured
instructions for AI models** to achieve predictable and controllable
outputs.

This handbook focuses primarily on **cinematic image generation**, but
the concepts apply broadly to AI prompting systems.

Prompt engineering evolves from:

    simple prompt writing
    → structured prompting
    → prompt architecture
    → prompt systems

------------------------------------------------------------------------

# Prompt Engineering Architecture Map

Prompt engineering can be visualized as layered architecture:

    +------------------------------------+
    | Prompt Systems                     |
    | (modular pipelines & frameworks)   |
    +------------------------------------+
    | Prompt Architecture                |
    | (structured prompts)               |
    +------------------------------------+
    | Prompt Mechanics                   |
    | (camera, light, subject control)   |
    +------------------------------------+
    | Base Prompt Writing                |
    | (simple descriptions)              |
    +------------------------------------+

------------------------------------------------------------------------

# Foundations

------------------------------------------------------------------------

# 1. 5 Levels of Prompt Engineering

## Definition

A maturity model describing increasing levels of control over AI
outputs.

### Level 1 --- Basic Prompting

    knight
    dragon
    cyberpunk city

Minimal control.

### Level 2 --- Descriptive Prompting

    medieval knight in worn armor
    standing in fog
    dramatic lighting

### Level 3 --- Structured Prompting

    subject
    environment
    camera
    lighting
    style

### Level 4 --- System Prompting

    character module
    scene module
    camera module
    lighting module

### Level 5 --- Director Prompting

    A tired knight sits in a tavern after battle.
    Warm candlelight illuminates his face.
    Shot with an 85mm lens.

------------------------------------------------------------------------

# 2. 3 Levels of Prompt Control

    Prompt Writing
    Prompt Architecture
    Prompt Systems

------------------------------------------------------------------------

# 3. 3 AI Image Modes

### Illustration Mode

    illustration
    digital painting
    concept art

### Concept Art Mode

    epic scene
    dramatic environment
    concept art

### Photorealistic Mode

    85mm lens
    film still
    natural lighting

------------------------------------------------------------------------

# 4. 80/20 Prompt Rule

    subject
    camera
    lighting
    realism
    style

------------------------------------------------------------------------

# Core Prompt Mechanics

------------------------------------------------------------------------

# 5. 4 Prompt Forces

    subject
    composition
    light
    reality

------------------------------------------------------------------------

# 6. 6 Prompt Control Knobs

    subject
    camera
    lighting
    environment
    atmosphere
    realism

------------------------------------------------------------------------

# 7. Prompt Hierarchy Effect

    Beginning → strongest signals
    Middle → scene construction
    End → style refinement

------------------------------------------------------------------------

# 8. Prompt Gravity Effect

    illustration
    digital painting
    film still
    85mm lens

------------------------------------------------------------------------

# Scene Construction

------------------------------------------------------------------------

# 9. 5 Hidden Prompt Layers

    core subject
    scene
    camera
    lighting
    style

------------------------------------------------------------------------

# 10. Prompt Stability Triangle

            Visual Identity
                 ▲
                 │
    Lighting ◄───┼───► Camera

------------------------------------------------------------------------

# 11. Character Anchor Technique

Define constant character traits.

    battle worn knight
    scar on left cheek
    scratched armor

The **Character Anchor** acts as the stable identity of a character
across prompts.\
When combined with scene changes and controlled camera/lighting
variations, it helps maintain recognizable visual identity.

**Note:** The Character Anchor Technique and Multi-Shot Consistency
Technique together form a **character consistency framework**, which
helps maintain stable characters across multiple generations.

------------------------------------------------------------------------

# 12. Multi-Shot Consistency Technique

Use anchor across multiple scenes.

Scene examples:

    battlefield
    tavern
    snow forest

This technique keeps the **character anchor constant while scenes
change**.

**Note:** Together with the Character Anchor Technique, this creates a
practical **character consistency framework** used to keep characters
visually stable across multiple generated scenes.

------------------------------------------------------------------------

# Cinematic Prompting

------------------------------------------------------------------------

## Practical Prompt Components

Most cinematic prompts are built from a set of **common visual
components**.

Typical components include:

    Subject
    Environment
    Lighting
    Camera
    Emotion
    Atmosphere
    Style

These elements act as **building blocks**, not a strict formula.\
Depending on the scene, their order and emphasis may change.

For example:

    Subject → Environment → Camera → Lighting

or

    Lighting → Subject → Emotion → Atmosphere

The key idea is that cinematic prompts combine these components to
describe a scene visually.

------------------------------------------------------------------------

# 13. 7 Cinematic Prompt Rules

1.  Think like a cinematographer\
2.  Lighting is critical\
3.  Imperfections create realism\
4.  Environment builds atmosphere\
5.  Simplicity beats chaos\
6.  Emotion adds life\
7.  Think like a director

------------------------------------------------------------------------

# 14. 10 Cinematic Prompt Formulas

    subject
    environment
    camera
    lighting
    style

------------------------------------------------------------------------

# 15. Hollywood Prompt Structure

    scene
    subject
    action
    environment
    lighting
    camera
    atmosphere
    style

------------------------------------------------------------------------

# 16. Cinematic Scene Formula

    moment
    character
    action
    environment
    camera
    lighting
    atmosphere
    style

------------------------------------------------------------------------

# 17. Cinematic Prompt Stack

    character anchor
    scene
    cinematography
    lighting
    atmosphere
    realism
    style

------------------------------------------------------------------------

# 18. Cinematic Prompt Pyramid

    Style
    Story
    Environment
    Lighting
    Camera
    Physical Reality

------------------------------------------------------------------------

# Realism Engineering

------------------------------------------------------------------------

# 19. AI Realism Barrier

Three common realism failures.

    plastic skin
    unrealistic lighting
    flat environments

Solutions:

    skin texture
    lighting physics
    atmospheric depth

### Lighting for Realism

Lighting is one of the strongest signals for visual realism in AI
images.

When prompting for realistic results, consider:

• **Natural light direction** --- specify where the light is coming from
(window light, side light, backlight).\
• **Soft vs hard light** --- soft light creates natural portraits, while
hard light creates stronger shadows.\
• **Atmospheric depth** --- light interacting with fog, dust, or haze
creates depth.\
• **Imperfect lighting conditions** --- real scenes often include uneven
lighting, shadows, or partially lit areas.

Example prompting hints:

    soft window light from the left
    warm candlelight illuminating the face
    volumetric light through dust particles

------------------------------------------------------------------------

# Optimization & Systems

------------------------------------------------------------------------

# 20. Prompt Compression Trick

Remove filler words:

    epic
    masterpiece
    ultra amazing

Keep core signals.

------------------------------------------------------------------------

# 21. Prompt Modularization

    character module
    environment module
    camera module
    lighting module

------------------------------------------------------------------------

# 22. Constraint-Based Prompting

    single character
    medium close-up
    simple background

------------------------------------------------------------------------

# 23. Prompt Weighting

    (knight:1.5)
    (cinematic lighting:1.2)

------------------------------------------------------------------------

# 24. Negative Prompting

    blurry
    low resolution
    extra limbs
    cartoon style

------------------------------------------------------------------------

# Debugging & Troubleshooting

------------------------------------------------------------------------

# 25. Prompt Debug Method

    1 reduce prompt
    2 identify signals
    3 rebuild structure
    4 test variations
    5 lock prompt

------------------------------------------------------------------------

# 26. Iterative Prompt Refinement

    generate
    evaluate
    adjust
    repeat

------------------------------------------------------------------------

# Technique Relationships Diagram

                     Prompt Systems
                            │
                            ▼
                 Prompt Architecture
                            │
                            ▼
                 Cinematic Prompting
                            │
                            ▼
                  Scene Construction
                            │
                            ▼
                   Prompt Mechanics
                            │
                            ▼
                     Base Prompts

------------------------------------------------------------------------

# Cinematic Prompt System Blueprint

    Character Anchor
          │
    Scene Module
          │
    Camera Module
          │
    Lighting Module
          │
    Atmosphere Module
          │
    Realism Layer
          │
    Style Lock

------------------------------------------------------------------------

# Advanced Debugging Workflow

    Problem detected
           │
           ▼
    Reduce prompt complexity
           │
           ▼
    Identify core signals
           │
           ▼
    Test controlled variations
           │
           ▼
    Refine prompt structure
           │
           ▼
    Lock working configuration

------------------------------------------------------------------------

## How to Use This Handbook With AI

### Core Rule

Technique selection comes before prompt construction.  
Choose only the techniques that improve the scene.  
Prefer simplicity and high signal density over stacking multiple frameworks.  
Every word in a prompt should carry meaningful visual information.

This rule ensures that prompts remain clear, focused, and efficient.

------------------------------------------------------------------------

This handbook can be used as a **prompt engineering knowledge base**.

When generating prompts from a scene description, follow this workflow:

1.  Read the handbook and identify relevant techniques.
2.  Analyze the scene description provided by the user.
3.  Select the most appropriate prompt engineering methods from the
    handbook.
4.  Combine those techniques to construct a structured prompt.
5.  Prioritize clarity, cinematic structure, and realism signals.
6.  Avoid using every technique --- choose only the ones that improve
    the result.
7.  If the scene is simple, keep the prompt minimal.
8.  If the scene is complex, apply modular prompt construction.
9.  Use the cinematic prompting frameworks when appropriate.
10. Produce the final optimized prompt.

Goal: translate a scene description into the most effective prompt using
the techniques in this handbook.

------------------------------------------------------------------------

# End of Handbook

`;
